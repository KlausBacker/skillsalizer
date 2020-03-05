package com.skillsalizer.sklzr.exception;

public class ApiRequestException extends RuntimeException {
    // ApiRequestException first constructor
    public ApiRequestException(String message) {
        super(message);
    }

    //ApiRequestException second constructor
    public ApiRequestException(String message, Throwable cause) {
        super(message, cause);
    }
}
