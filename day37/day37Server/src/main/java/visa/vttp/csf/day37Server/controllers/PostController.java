package visa.vttp.csf.day37Server.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import visa.vttp.csf.day37Server.models.Post;
import visa.vttp.csf.day37Server.services.UploadService;

@Controller
@RequestMapping(path = "/post")
public class PostController {

    @Autowired
    private UploadService uploadSvc;

    @GetMapping(path = "{postId}")
    public String getPost(@PathVariable Integer postId, Model model) {

        Optional<Post> opt = uploadSvc.getPost(postId);
        Post p = opt.get();
        model.addAttribute("post", p);
        model.addAttribute("imageSrc", "/upload/%d".formatted(p.getPostId()));
        return "post";
    }

}
