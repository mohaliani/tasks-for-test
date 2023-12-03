package com.medali.BackEndApi.services.implementation;

import com.medali.BackEndApi.domain.Contact;
import com.medali.BackEndApi.repositories.ContactRepository;
import com.medali.BackEndApi.services.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service

public class ContactServiceImplementation implements ContactService {

    private final ContactRepository contactRepository;

    @Autowired
    public ContactServiceImplementation(ContactRepository contactRepository){
        this.contactRepository = contactRepository;
    }

    @Override
    public List<Contact> findAll() {
        return contactRepository.findAll();
    }

    @Override
    public Contact addContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public Contact addRandomContact() {
        String randomName = generateRandomName();
        String randomPhoneNumber = generateRandomPhoneNumber();
        Contact randomContact = new Contact(randomName, randomPhoneNumber);

        return contactRepository.save(randomContact);
    }

    private String generateRandomName() {
        Random random = new Random();
        StringBuilder stringBuilder = new StringBuilder();
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        int length = 8;

        for (int i = 0; i < length; i++) {
            int randomIndex = random.nextInt(characters.length());
            stringBuilder.append(characters.charAt(randomIndex));
        }
        return stringBuilder.toString();
    }

    private String generateRandomPhoneNumber() {
        Random random = new Random();
        String[] prefixes = {"05", "06", "07"};
        String selectedPrefix = prefixes[random.nextInt(prefixes.length)];

        StringBuilder phoneNumber = new StringBuilder(selectedPrefix);

        for (int i = 0; i < 8; i++) {
            phoneNumber.append(random.nextInt(10));
        }

        return phoneNumber.toString();
    }

}
