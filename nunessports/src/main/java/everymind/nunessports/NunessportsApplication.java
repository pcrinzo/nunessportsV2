package everymind.nunessports;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class NunessportsApplication {

	public static void main(String[] args) {
		SpringApplication.run(NunessportsApplication.class, args);
	}

}
