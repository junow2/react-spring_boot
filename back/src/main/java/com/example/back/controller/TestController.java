package com.example.back.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
  
  @GetMapping("/api/test")
  public String hello() {
    return "YESYESYES";
  }
  
  @GetMapping("/hello")
  public String test() {
      return "Hello World";
  }
  
}
