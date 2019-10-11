package com.dsoft.tpdsoft.exceptions;

public class StorageException extends RuntimeException {
    public StorageException(String message) {
        super(message);
    }

    public StorageException(String message, Exception ex) {
        super(message, ex);
    }
}
