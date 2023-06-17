package com.example.demo.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ExceptionNotFound {
    private  static final long serialVersionID= 1L;
    public ExceptionNotFound(String message){

    }

}
