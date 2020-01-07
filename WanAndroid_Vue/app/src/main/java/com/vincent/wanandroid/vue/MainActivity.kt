package com.vincent.wanandroid.vue

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.text.TextUtils
import android.view.KeyEvent
import androidx.fragment.app.FragmentActivity
import kotlinx.android.synthetic.main.activity_main.*
import java.io.UnsupportedEncodingException
import java.net.URLDecoder
import android.view.KeyEvent.KEYCODE_BACK
import android.webkit.*
import androidx.annotation.RequiresApi
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLConnection
import java.util.*


class MainActivity : FragmentActivity() {

    private val MAIN_PAGE = "file:///android_asset/index.html"
    var mBackKeyPressed = false
    @RequiresApi(Build.VERSION_CODES.JELLY_BEAN)
    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val webSettings = webview.settings
        webSettings.javaScriptEnabled = true
        webSettings.cacheMode = WebSettings.LOAD_DEFAULT
        webSettings.domStorageEnabled = true
        webSettings.databaseEnabled = true
        webSettings.setAppCacheEnabled(true)
        webSettings.allowFileAccess = true
        webSettings.useWideViewPort = true
        webSettings.allowFileAccessFromFileURLs = true
        webSettings.loadWithOverviewMode = true
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            webSettings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW)
        };
        webSettings.javaScriptCanOpenWindowsAutomatically = true
        webview.webViewClient = object : WebViewClient() {
            override fun shouldOverrideUrlLoading(view: WebView, url: String): Boolean {
                var url = url
                try {
                    url = URLDecoder.decode(url, "utf-8")
                } catch (e: UnsupportedEncodingException) {
                    e.printStackTrace()
                }

                val uri = Uri.parse(url)
                return super.shouldOverrideUrlLoading(view, url)
            }

//            override fun shouldInterceptRequest(
//                view: WebView?,
//                urlstr: String?
//            ): WebResourceResponse? {
//                try {
//                    // Our implementation just parses the response and visualizes it. It does not properly handle
//                    // redirects or HTTP errors at the moment. It only serves as a demo for intercepting POST requests
//                    // as a starting point for supporting multiple types of HTTP requests in a full fletched browser
//                    var url: URL? = null;
//                    var fileExtens: String = null;
//                    if (isProxyUrl) {
//                        fileExtens = MimeTypeMap.getFileExtensionFromUrl(urlstr);
//                    } else {
//                        url = new URL (urlstr);
//                    }
//                    if (TextUtils.isEmpty(fileExtens)) {
//                        fileExtens = "html";
//                    }
//                    var mimeType: String = FileStreamType.getStreamType(fileExtens);
//                    if (isProxyUrl) {
//                        url = new URL (generateProxyUrl(urlstr, mimeType));
//                    }
//                    URLConnection rulConnection = url . openConnection ();
//                    HttpURLConnection conn =(HttpURLConnection) rulConnection;
//                    conn.setRequestProperty("contentType", mimeType);
//                    conn.setRequestProperty("Accept", mimeType);
//                    conn.setRequestProperty("Accept-Charset", "utf-8");
//                    conn.setRequestMethod("GET");
//                    String encodeing = conn . getContentEncoding ();
//                    if (TextUtils.isEmpty(encodeing)) {
//                        encodeing = "utf-8";
//                    }
//                    WebResourceResponse webResourceResponse = new WebResourceResponse(
//                        mimeType,
//                        encodeing,
//                        conn.getInputStream()
//                    );
//                    Map<String, String> headers = new HashMap<>();
//                    // 解决webView跨域问题
//                    headers.put("Access-Control-Allow-Origin", ApiPath.getInstance().getHostName());
//                    headers.put("Access-Control-Allow-Headers", "X-Requested-With");
//                    headers.put("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
//                    headers.put("Access-Control-Allow-Credentials", "true");
//                    webResourceResponse.setResponseHeaders(headers);
//                    return webResourceResponse;
////                }
//                } catch (e: Exception) {
//                    e.printStackTrace();
//                }
//                return null;
//
//            }

        }

        webview.webChromeClient = WebChromeClient()
        webview.loadUrl(MAIN_PAGE)
    }

    override fun onKeyDown(keyCode: Int, event: KeyEvent): Boolean {

        if (keyCode == KeyEvent.KEYCODE_BACK) {
            if (webview.canGoBack()) {
                webview.goBack()
                return true
            } else {
                if (!mBackKeyPressed) {

                    mBackKeyPressed = true
                    Timer().schedule(object : TimerTask() {
                        override fun run() {
                            mBackKeyPressed = false
                        }

                    }, 2000)
                    return true

                } else {
                    this.finish()
                    System.exit(0)
                }
            }
        }
        return super.onKeyDown(keyCode, event)
    }


}
