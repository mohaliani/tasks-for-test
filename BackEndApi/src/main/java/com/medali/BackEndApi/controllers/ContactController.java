package com.medali.BackEndApi.controllers;

import com.medali.BackEndApi.domain.Contact;
import com.medali.BackEndApi.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ContactController {
    private final ContactService contactService;
    @Autowired
    public ContactController( final ContactService contactService){
        this.contactService=contactService;
    }
    @GetMapping("")
    public ResponseEntity<List<Contact>> getAllContacts(){
        return new ResponseEntity<>(contactService.findAll(), HttpStatus.OK)  ;
    }
    @PostMapping("")
    public ResponseEntity<Contact>  addContact(@RequestBody Contact  contact){
        return new ResponseEntity<>(contactService.addContact(contact),HttpStatus.CREATED);
    }
    @PostMapping("/random")
    public ResponseEntity<Contact> addRandomContact(){
        return new ResponseEntity<>(contactService.addRandomContact(),HttpStatus.CREATED);
    }

}
