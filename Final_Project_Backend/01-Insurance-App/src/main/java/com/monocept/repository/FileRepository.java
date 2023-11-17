package com.monocept.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.monocept.entity.Document;


public interface FileRepository extends JpaRepository<Document, Long>{

	Document findByDocumentName(String documentName);
	
//	public Document findByName(String fileName);
}
