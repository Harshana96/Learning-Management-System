package ee8217com.lms.learningmanagent;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;

import javax.management.Query;
import java.util.List;

@SpringBootApplication
public class LearningmanagentApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearningmanagentApplication.class, args);
	}

//	@Bean
//	CommandLineRunner runner(StudentRepository repository) {
//		return args -> {
//			Address address = new Address(
//					"Beligamuwa",
//					"Galewela",
//					"21214"
//			);
////			String email = ;
//			Student student = new Student(
//					"Sanda",
//					"Geethma",
//					"sanda123@gmail.com",
//					Gender.FEMALE,
//					address
//			);

//			Query query = new Query();
//			query.addCriteria(Criteria.where("email").is(email));
//
//			List<Student> students = mongoTemplate.find(query, Student.class);

//			repository.insert(student);
//		};
//	}
}
