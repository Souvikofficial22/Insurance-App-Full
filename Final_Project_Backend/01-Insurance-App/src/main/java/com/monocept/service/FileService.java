package com.monocept.service;

import java.io.IOException;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import com.monocept.entity.Document;


public interface FileService {

	String uploadFile(MultipartFile file) throws IOException;

	byte[] downloadFile(String documentName);

	List<Document> findAll();

	Page<Document> findAll(int offset, int pageSize);

}
