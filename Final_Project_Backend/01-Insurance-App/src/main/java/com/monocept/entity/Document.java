package com.monocept.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Document {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "document_id")
	private long documentId;
	
	@Column(name="document_name")
	private String documentName;
	
	@Column(name="document_type")
	private String documentType;
	
	@Lob
	@Column(name="document_data")
	private byte[] documentData;
	
	public Document() {
		
	}

	public Document(String documentName, String documentType, byte[] documentData) {
		super();
		this.documentName = documentName;
		this.documentType = documentType;
		this.documentData = documentData;
	}

	public long getDocumentId() {
		return documentId;
	}

	public void setDocumentId(int documentId) {
		this.documentId = documentId;
	}

	public String getDocumentName() {
		return documentName;
	}

	public void setDocumentName(String documentName) {
		this.documentName = documentName;
	}

	public String getDocumentType() {
		return documentType;
	}

	public void setDocumentType(String documentType) {
		this.documentType = documentType;
	}

	public byte[] getDocumentData() {
		return documentData;
	}

	public void setDocumentData(byte[] documentData) {
		this.documentData = documentData;
	}
	
	
	
	
}
