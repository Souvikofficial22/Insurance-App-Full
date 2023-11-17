package com.monocept.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.monocept.entity.Email;

@Service
public class EmailServiceImpl implements IEmailService{
	
	@Autowired
    private JavaMailSender mailSender;

    public void sendEmail(Email email) {
        
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(email.getFrom());
        message.setTo(email.getTo());
        message.setText(email.getTextMessage());
        message.setSubject(email.getSubject());
        
        mailSender.send(message);
        
        System.out.println("mail sent successfully...");
        
    }
}
