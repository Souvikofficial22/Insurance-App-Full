package com.monocept.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.monocept.entity.Email;
import com.monocept.service.IEmailService;

@RestController
@RequestMapping("/email")
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class EmailController {
	
	@Autowired
	private IEmailService emailService;
	
//	@EventListener(ApplicationReadyEvent.class)
	@PostMapping("/sendmail")
	public void sendMail(@RequestBody Email email) {
		emailService.sendEmail(email);
	}
}
