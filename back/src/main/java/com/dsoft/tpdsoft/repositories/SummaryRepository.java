package com.dsoft.tpdsoft.repositories;

import com.dsoft.tpdsoft.model.Client;
import com.dsoft.tpdsoft.model.Provider;
import com.dsoft.tpdsoft.model.Summary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SummaryRepository extends JpaRepository<Summary, Integer> {
    Page<Summary> findAllByClientOrderByCreateAtAsc(Client client, Pageable pageable);
    Page<Summary> findAllByProviderOrderByCreateAtAsc(Provider provider, Pageable pageable);
}
