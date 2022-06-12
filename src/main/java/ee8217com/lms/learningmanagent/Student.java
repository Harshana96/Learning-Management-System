package ee8217com.lms.learningmanagent;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Student {
    @Id
    private String id;
    private String regNumber;
    private String firstName;
    private String lastName;
    private String email;
    private String gender;

    public Student(String regNumber, String firstName, String lastName, String email, String gender) {
        this.regNumber = regNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
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

}
