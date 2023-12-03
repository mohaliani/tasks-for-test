package com.medali.BackEndApi.services;

import com.medali.BackEndApi.domain.Contact;

import java.util.List;

public interface ContactService {
    List<Contact> findAll();
    Contact addContact(Contact contact);
    Contact addRandomContact();

}
