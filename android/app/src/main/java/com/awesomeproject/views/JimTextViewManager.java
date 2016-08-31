package com.awesomeproject.views;

import android.graphics.Color;
import android.widget.TextView;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by JimKong on 2016/8/31.
 */
public class JimTextViewManager extends SimpleViewManager<TextView> {
    @Override
    public String getName() {
        return "JimTextView";
    }

    @Override
    protected TextView createViewInstance(ThemedReactContext reactContext) {
        TextView textView = new TextView(reactContext);
        return textView;
    }

    @ReactProp(name="text")
    public void setText(TextView view,String text){
        view.setText(text);
    }
    @ReactProp(name="textSize")
    public void setTextSize(TextView view,float fontSize){
        view.setTextSize(fontSize);
    }
    @ReactProp(name="textColor",defaultInt = Color.BLACK)
    public void setTextColor(TextView view,int textColor){
        view.setTextColor(textColor);
    }
    @ReactProp(name="isAlpha",defaultBoolean = false)
    public void setTextAlpha(TextView view,boolean isAlpha){
        if(isAlpha){
            view.setAlpha(0.5f);
        }else{
            view.setAlpha(1.0f);
        }
    }
}
