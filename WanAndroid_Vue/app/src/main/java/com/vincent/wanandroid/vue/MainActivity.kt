package com.vincent.wanandroid.vue

import android.annotation.SuppressLint
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.view.KeyEvent
import android.webkit.*
import androidx.annotation.RequiresApi
import androidx.fragment.app.FragmentActivity
import kotlinx.android.synthetic.main.activity_main.*
import java.io.UnsupportedEncodingException
import java.net.URLDecoder
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
        webSettings.useWideViewPort = true
        webSettings.allowFileAccessFromFileURLs = true
        webSettings.allowUniversalAccessFromFileURLs =true
        webSettings.loadWithOverviewMode = true
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            webSettings.mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        }
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

            override fun shouldInterceptRequest(
                view: WebView?,
                url: String?
            ): WebResourceResponse? {
                if(!url?.contains("wanandroid")!! ||url.endsWith(".png")) {
                    return super.shouldInterceptRequest(webview, url)
                }else {
                    return Util.getWebView(url)

                }}



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
