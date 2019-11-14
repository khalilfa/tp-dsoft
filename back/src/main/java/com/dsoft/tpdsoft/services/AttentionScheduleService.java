package com.dsoft.tpdsoft.services;

import com.dsoft.tpdsoft.exceptions.NotFoundException;
import com.dsoft.tpdsoft.exceptions.StorageException;
import com.dsoft.tpdsoft.model.AttentionSchedule;
import com.dsoft.tpdsoft.repositories.AttentionScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AttentionScheduleService {

    AttentionScheduleRepository attentionScheduleRepository;

    public AttentionSchedule saveAS(AttentionSchedule as) {
        try {
            return this.attentionScheduleRepository.save(as);
        } catch (Exception e) {
            throw new StorageException("Could not save the Schedule. ", e);
        }
    }

    public AttentionSchedule getAS(Integer id) {
        return this.attentionScheduleRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Could not get schedule with id: " + id));
    }

    public AttentionSchedule updateAS(AttentionSchedule as, Integer id) {
        try {
            as.setId(id);
            return this.attentionScheduleRepository.save(as);
        } catch (Exception e) {
            throw new StorageException("Could not save the Schedule. ", e);
        }
    }
}
