package com.dsoft.tpdsoft.exceptions;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class ApiErrorVOTest {
    private ApiErrorVO apiErrorVO;

    @Before
    public void before() {
        this.apiErrorVO = new ApiErrorVO("400", "Bad Request");
    }

    @Test
    public void apiErrorVOIsEmpty() {
        ApiErrorVO apiErrorVO = new ApiErrorVO();
        assertEquals(apiErrorVO.getErrorCode(), null);
        assertEquals(apiErrorVO.getMessage(), null);
    }

    //Getters and Setters
    @Test
    public void getters() {
        assertEquals(this.apiErrorVO.getMessage(), "Bad Request");
        assertEquals(this.apiErrorVO.getErrorCode(), "400");
    }

    @Test
    public void setMessage() {
        this.apiErrorVO.setMessage("Internal Server Error");
        assertEquals(this.apiErrorVO.getMessage(), "Internal Server Error");
    }

    @Test
    public void setErrorCode() {
        this.apiErrorVO.setErrorCode("500");
        assertEquals(this.apiErrorVO.getErrorCode(), "500");
    }
}
