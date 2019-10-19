package com.dsoft.tpdsoft.repositories;

import com.dsoft.tpdsoft.model.AttentionSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttentionScheduleRepository extends JpaRepository<AttentionSchedule, Integer> {
}
