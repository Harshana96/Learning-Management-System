package ee8217com.lms.learningmanagent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping()
@CrossOrigin()

public class StudentController {
    @Autowired
    private StudentRepository studentRepository;
    @PostMapping("/add")
    public ResponseEntity<?> addStudent(@RequestBody Student student){
        try{
            if(!this.studentRepository.existsById(student.getRegNumber())){
                Student save = this.studentRepository.save(student);
                return ResponseEntity.ok(save);
            }else{
                return ResponseEntity.ok("Already exists");
            }
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/getAll")
    @CrossOrigin()
    public ResponseEntity<?> getStudent(){
        try {
            return ResponseEntity.ok(this.studentRepository.findAll());
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    @CrossOrigin
    public ResponseEntity<?> deleteStudent(@PathVariable("id") String regNumber){
        try{
            this.studentRepository.findById(regNumber);
            if (studentRepository.existsById(regNumber)){
                this.studentRepository.deleteById(regNumber);
                return ResponseEntity.status(HttpStatus.OK).body("Registration Number" + regNumber + "Successfully deleted");
            }else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("cannot find");
            }
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
