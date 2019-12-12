package com.dsoft.tpdsoft.repositories;

import com.dsoft.tpdsoft.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, String> {
}
