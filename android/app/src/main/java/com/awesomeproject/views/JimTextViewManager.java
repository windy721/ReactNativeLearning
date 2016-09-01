package com.awesomeproject.views;

import android.graphics.Color;
import android.view.MotionEvent;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 * Created by JimKong on 2016/8/31.
 */
public class JimTextViewManager extends SimpleViewManager<TextView> {
    @Override
    public String getName() {
        return "JimTextView";
    }

    @Override
    protected TextView createViewInstance(final ThemedReactContext reactContext) {
        final TextView textView = new TextView(reactContext);
        textView.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                if (event.getAction() == MotionEvent.ACTION_DOWN) {
                    WritableMap nativeEvent = Arguments.createMap();
                    nativeEvent.putString("message", "MyMessage");
                    reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                            textView.getId(), "topChange", nativeEvent
                    );
                    return true;
                } else {
                    return false;
                }
            }
        });
        return textView;
    }

    @ReactProp(name = "text")
    public void setText(TextView view, String text) {
        view.setText("HAHA: " + text);
    }

    @ReactProp(name = "textSize")
    public void setTextSize(TextView view, float fontSize) {
        view.setTextSize(fontSize);
    }

    @ReactProp(name = "textColor", defaultInt = Color.BLACK)
    public void setTextColor(TextView view, int textColor) {
        view.setTextColor(textColor);
    }

    @ReactProp(name = "isAlpha", defaultBoolean = false)
    public void setTextAlpha(TextView view, boolean isAlpha) {
        if (isAlpha) {
            view.setAlpha(0.5f);
        } else {
            view.setAlpha(1.0f);
        }
    }
}
