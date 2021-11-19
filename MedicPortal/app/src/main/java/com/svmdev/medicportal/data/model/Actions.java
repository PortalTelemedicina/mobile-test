package com.svmdev.medicportal.data.model;

import com.google.gson.annotations.SerializedName;

public class Actions {

    @SerializedName("chat")
    private String chat;

    @SerializedName("call")
    private String call;

    public Actions() {
    }

    public Actions(String chat) {
        this.chat = chat;
    }

    public Actions(String chat, String call) {
        this.chat = chat;
        this.call = call;
    }

    public String getChat() {
        return chat;
    }

    public String getCall() {
        return call;
    }

    public void setChat(String chat) {
        this.chat = chat;
    }

    public void setCall(String call) {
        this.call = call;
    }
}
