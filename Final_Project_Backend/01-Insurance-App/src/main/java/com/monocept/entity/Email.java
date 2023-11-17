package com.monocept.entity;

public class Email {
	private String from;
	private String to;
	private String subject;
	private String textMessage;

	public Email(String from, String to, String subject, String textMessage) {
		super();
		this.from = from;
		this.to = to;
		this.subject = subject;
		this.textMessage = textMessage;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getTextMessage() {
		return textMessage;
	}

	public void setTextMessage(String textMessage) {
		this.textMessage = textMessage;
	}

}
