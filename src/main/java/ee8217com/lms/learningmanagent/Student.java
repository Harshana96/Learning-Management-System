package ee8217com.lms.learningmanagent;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Student {
    @Id
    private String id;
    private String regNumber;
    private String firstName;
    private String lastName;
    @Indexed(unique = true)
    private String email;
//    private Gender gender;
//    private Address address;

    public Student(String regNumber, String firstName, String lastName, String email, Gender gender, Address address) {
        this.regNumber = regNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
//        this.gender = gender;
//        this.address = address;
    }

    public String regNumber() {
        return regNumber;
    }

    public void setRegNum(String regNum) {
        this.regNumber = regNumber;
    }
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void getLastName(String lastName) {
        this.lastName = lastName;
    }

    public String email() {
        return email;
    }

    public void email(String email) {
        this.email = email;
    }

//    public String address() {
//        return address;
//    }
//
//    public void address(String address) {
//        this.address = address;
//    }

}
