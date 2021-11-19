package com.svmdev.medicportal.data.model;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class Specialist implements Serializable {

    private int id;

    @SerializedName("name")
    private String name;

    @SerializedName("description")
    private String description;

    @SerializedName("distance")
    private double distance;

    @SerializedName("actions")
    private Actions actions;

    private int typeId;

    public Specialist(int id, String name, String description, double distance, Actions actions, int typeId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.distance = distance;
        this.actions = actions;
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

    public String getDescription() {
        return description;
    }

    public double getDistance() {
        return distance;
    }

    public Actions getActions() {
        return actions;
    }

    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }
}
