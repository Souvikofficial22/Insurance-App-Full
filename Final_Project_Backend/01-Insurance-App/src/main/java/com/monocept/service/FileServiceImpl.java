package com.monocept.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.monocept.entity.Document;
import com.monocept.repository.FileRepository;
import com.monocept.util.FileUtils;

@Service
public class FileServiceImpl implements FileService {

	@Autowired
	private FileRepository repository;

	@Override
	public String uploadFile(MultipartFile file) throws IOException {
		Document document = repository.save(new Document(file.getOriginalFilename(), file.getContentType(),
				FileUtils.compressFile(file.getBytes())));
		System.out.println(document);
		if (document != null) {
			System.out.println("upload success");
			return "File uploaded successfully " + file.getOriginalFilename();
		}
		return null;
	}

	@Override
	public byte[] downloadFile(String documentName) {
		Document dbDocument = repository.findByDocumentName(documentName);
		byte[] decompressFile = FileUtils.decompressFile(dbDocument.getDocumentData());
		return decompressFile;

	}

	@Override
	public List<Document> findAll() {
		System.out.println("inside service find all");
		return repository.findAll();
	}

	@Override
	public Page<Document> findAll(int offset, int pageSize) {
		return repository.findAll(PageRequest.of(offset, pageSize));
	}

}
