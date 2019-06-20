package com.vincent.wanandroid.vue

import android.net.Uri
import android.os.Bundle
import android.text.TextUtils
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.fragment.app.FragmentActivity
import kotlinx.android.synthetic.main.activity_main.*
import java.io.UnsupportedEncodingException
import java.net.URLDecoder

class MainActivity : FragmentActivity() {

    private val MAIN_PAGE = "file:///android_asset/index.html";
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val webSettings = webview.settings
        webSettings.setJavaScriptEnabled(true)
        webSettings.cacheMode = WebSettings.LOAD_DEFAULT
        webSettings.domStorageEnabled = true
        webSettings.databaseEnabled = true
        webSettings.setAppCacheEnabled(true)
        webSettings.allowFileAccess = true
        webSettings.useWideViewPort = true
        webSettings.loadWithOverviewMode = true
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

        }

        webview.webChromeClient = WebChromeClient()
        webview.loadUrl(MAIN_PAGE)
    }
}
