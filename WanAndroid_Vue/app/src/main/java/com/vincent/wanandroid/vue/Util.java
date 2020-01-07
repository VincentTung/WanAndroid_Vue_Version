package com.vincent.wanandroid.vue;

import android.os.Build;
import android.webkit.MimeTypeMap;
import android.webkit.WebResourceResponse;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSession;

/**
 * Created by VincentTung on 2020-01-07.
 */
public class Util {

    public static  WebResourceResponse getWebView(String path){
        WebResourceResponse response = null;
        StringBuffer stringBuffer = new StringBuffer();
        BufferedReader bufferedReader = null;
        try {
            URL url = new URL(path);
            HttpsURLConnection connection = null;
            connection = (HttpsURLConnection) url.openConnection();
            ((HttpsURLConnection) connection).setHostnameVerifier(new HostnameVerifier() {
                @Override
                public boolean verify(String hostname, SSLSession session) {
                    return true;
                }
            });
            connection.setConnectTimeout(10*1000);
            connection.setReadTimeout(10*1000);
            bufferedReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line = "";
            while ((line = bufferedReader.readLine()) != null){
                stringBuffer.append(line);
                if (line.equals("<head>")){
                    // 在<head>中添加<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
                    stringBuffer.append("<meta http-equiv=\"Content-Security-Policy\" content=\"upgrade-insecure-requests\">");
                }
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            if (bufferedReader != null){
                try {
                    bufferedReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        String mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(MimeTypeMap.getFileExtensionFromUrl(path));
        Map<String, String> headers = new HashMap<>();
        // 解决webView跨域问题
        headers.put("Access-Control-Allow-Origin", "*");
        headers.put("Access-Control-Allow-Headers","*");
        headers.put("Access-Control-Allow-Methods","*");
        headers.put("Access-Control-Allow-Credentials", "true");

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            response = new WebResourceResponse(mimeType,
                    "utf-8", 200,"OK",headers,
                    new ByteArrayInputStream(stringBuffer.toString().getBytes()));
        }
        return response;
    }
}
