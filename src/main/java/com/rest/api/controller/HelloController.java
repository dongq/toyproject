package com.rest.api.controller;

import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {

    @GetMapping(value = "/")
    public String hello(){ return "index";}
    @GetMapping(value = "/rim")
    public String hello_rim(){
        return "rim";
    }
    @GetMapping(value = "/trend")
    public String hello_trend(){
        return "trend";
    }
    @GetMapping(value = "/lowper")
    public String hello_lowper(){
        return "lowper";
    }
    @GetMapping(value = "/consensus")
    public String hello_consensus(){ return "consensus"; }
    @GetMapping(value = "/whobuy")
    public String hello_whobuy(){
        return "whobuy";
    }
    @GetMapping(value = "/faq")
    public String hello_faq(){
        return "faq";
    }
    @GetMapping(value = "/credit")
    public String hello_credit(){
        return "credit";
    }
    @GetMapping(value = "/test")
    public String hello_test(){
        return "test";
    }
    @GetMapping(value = "/persector")
    public String hello_persector(){
        return "persector";
    }




    @GetMapping(value = "/helloworld/string")
    @ResponseBody
    public String helloworldString(){
        return "helloworld";
    }
    @GetMapping(value = "/helloworld/json")
    @ResponseBody
    public Hello  helloworldJson(){
        Hello hello = new Hello();
        hello.message = "helloworld";
        return hello;
    }

    @GetMapping(value = "/helloworld/page")
    public String  helloworld(){
        return "helloworld";
    }


    @Getter
    @Setter
    public static class Hello {
        private String message;
    }
}
