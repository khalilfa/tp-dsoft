package com.dsoft.tpdsoft.repositories;

import com.dsoft.tpdsoft.model.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<File, Integer> {
}
