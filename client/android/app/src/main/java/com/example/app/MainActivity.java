package com.example.app;

import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

import org.json.JSONException;
import org.json.JSONObject;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Call the initialize method to set up the app
        initialize();
    }

    private void initialize() {
        // Get the environment variables from the capacitor.config.json file
        JSONObject env = new JSONObject();
        try {
            InputStream inputStream = getAssets().open("capacitor.config.json");
            int size = inputStream.available();
            byte[] buffer = new byte[size];
            inputStream.read(buffer);
            inputStream.close();
            String json = new String(buffer, StandardCharsets.UTF_8);
            JSONObject capacitorConfig = new JSONObject(json);
            env = capacitorConfig.getJSONObject("environment");
        } catch (IOException | JSONException e) {
            Log.e("MainActivity", "Error loading capacitor.config.json", e);
        }

        // Get the API URL and environment name from the environment variables
        String apiUrl = "";
        String envName = "";
        try {
            apiUrl = env.getString("API_URL");
            envName = env.getString("ENV_NAME");
        } catch (JSONException e) {
            Log.e("MainActivity", "Error parsing environment variables", e);
        }

        // Log the environment variables to the console
        Log.i("MainActivity", "API URL: " + apiUrl);
        Log.i("MainActivity", "Environment: " + envName);

        // Use the environment variables in your app code
        // ...
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
    }

    @Override
    public void onPause() {
        super.onPause();
    }

    @Override
    public void onResume() {
        super.onResume();
    }

    @Override
    public void onStop() {
        super.onStop();
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    @Override
    public void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
    }

}
