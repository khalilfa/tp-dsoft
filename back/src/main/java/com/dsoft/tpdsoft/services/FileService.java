package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.File;
import com.dsoft.tpdsoft.repositories.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;

    public File getFile(Integer id) {
        return this.fileRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Could not get the file with id: " + id));
    }

    public File updateFile(MultipartFile file, Integer logoId){
        String filename = StringUtils.cleanPath(file.getOriginalFilename());

        try {
            if(filename.contains("..")) {
                throw new StorageException("Sorry! Filename contains invalid path sequence " + filename);
            }

            File newFile = new File(file.getBytes(), filename);
            newFile.setId(logoId);

            return this.fileRepository.save(newFile);
        } catch (Exception e) {
            throw new StorageException("Could not save the file with name: " + filename, e);
        }
    }
}
