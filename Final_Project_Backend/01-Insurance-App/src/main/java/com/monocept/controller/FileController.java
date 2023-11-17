package com.monocept.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.monocept.entity.Document;
import com.monocept.entity.Document;
import com.monocept.service.FileService;

@RestController
@RequestMapping("/file")
public class FileController {

	@Autowired
	private FileService service;

	@PostMapping("/upload")
	public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
		String uploadedFile = service.uploadFile(file);
		return ResponseEntity.status(HttpStatus.OK).body(uploadedFile);
	}

	// get all files

	@GetMapping("/allfiles")
	public List<Document> findAll() {
		System.out.println("inside find all controller");
		List<Document> files = service.findAll();
		return files;
	}
	
//	get all with pagination
	@GetMapping("/files/{offset}/{pageSize}")
	public Page<Document> getAllPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<Document> documents = service.findAll(offset, pageSize);
		return documents;
		
	}

	@GetMapping("/download/{documentName}")
	public ResponseEntity<?> downloadFile(@PathVariable String documentName) {

		byte[] downloadFile = service.downloadFile(documentName);
		return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("plain/text")).body(downloadFile);
	}

}
