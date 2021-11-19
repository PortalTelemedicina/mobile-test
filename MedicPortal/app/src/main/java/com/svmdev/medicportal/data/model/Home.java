package com.svmdev.medicportal.data.model;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class Home implements Serializable {

    private int id;

    @SerializedName("name")
    private String name;

    @SerializedName("image_url")
    private String imageUrl;

    @SerializedName("total")
    private int total;

    @SerializedName("color")
    private String color;

    private int typeId;

    public Home(int id, String name, String imageUrl, int total, String color, int typeId) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.total = total;
        this.color = color;
        this.typeId = typeId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public int getTotal() {
        return total;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }
}
