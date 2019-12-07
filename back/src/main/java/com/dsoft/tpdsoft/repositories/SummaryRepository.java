package com.dsoft.tpdsoft.repositories;

import com.dsoft.tpdsoft.model.Summary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SummaryRepository extends JpaRepository<Summary, Integer> {
}
