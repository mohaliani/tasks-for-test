package com.medali.BackEndApi.services.implementation;

import com.medali.BackEndApi.domain.Contact;
import com.medali.BackEndApi.repositories.ContactRepository;
import com.medali.BackEndApi.services.CsvService;
import com.opencsv.CSVReader;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.FileReader;
import java.io.IOException;

@Service
public class CsvServiceImplementation implements CsvService {
    private final ContactRepository contactRepository;

    @Autowired
    public CsvServiceImplementation(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @PostConstruct
    public void readCSVFileAndPopulateDatabase() {
        // Path to your CSV file
        String csvFilePath = "C:\\Users\\DELL\\OneDrive\\Bureau\\BackEndApi\\BackEndApi\\src\\main\\resources\\data\\test.csv";

        try (CSVReader reader = new CSVReader(new FileReader(csvFilePath))) {
            String[] line;
            while ((line = reader.readNext()) != null) {
                // Create Contact objects from CSV data and save to the database
                Contact contact = new Contact(line[0], line[1]);
                contactRepository.save(contact);
            }
            System.out.println("CSV data has been successfully imported to the database.");
        } catch (IOException e) {
            e.printStackTrace();
            // Handle the exception accordingly
        } catch (CsvValidationException e) {
            throw new RuntimeException(e);
        }
    }
}
