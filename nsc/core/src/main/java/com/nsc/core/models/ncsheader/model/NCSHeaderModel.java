package com.nsc.core.models.ncsheader.model;


import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import com.nsc.core.models.ncsheader.model.resources.NCSOneDepsRes;
import lombok.Getter;
import lombok.Setter;
import org.apache.sling.api.SlingHttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import java.util.*;


@Slf4j
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NCSHeaderModel {
    @Getter @Setter
    @ValueMapValue(name = "mainImageIcon") private String mainImageIcon;

    @Getter @Setter
    @ChildResource(name = "oneDapsItems") private List<NCSOneDepsRes> oneDapsItems;

    @Getter @Setter
    @SlingObject
    private Resource currentResource;

    @Getter @Setter
    @SlingObject
    private ResourceResolver resourceResolver;


    @Getter @Setter
    private List<Map<String,String>> oneDepsList;
    @Getter @Setter
    private List<Map<String,String>> twoDepsList;

    @PostConstruct
    protected void init() {
        oneDepsList =new ArrayList<Map<String, String>>();
        twoDepsList =new ArrayList<Map<String, String>>();
        PageManager pageManager = resourceResolver.adaptTo(PageManager.class);
        if (pageManager != null) {
            Page page = pageManager.getPage("/content/nsc/kr/ko");
            if (page != null) {

                //1deps url 및 title가져오기
                Iterator<Page> childPages = page.listChildren();
                while (childPages.hasNext()) {
                    Page child1deps = childPages.next();

                    Map<String, String> map1 = new HashMap<>();
                    map1.put("Title", child1deps.getTitle());
                    map1.put("Path", child1deps.getPath());

                    oneDepsList.add(map1);
                    log.info("📁 Child111111 Page - Title: {}, Path: {}", child1deps.getTitle(), child1deps.getPath());

                    Page page2deps = pageManager.getPage(child1deps.getPath());
                    if (page2deps != null) {

                        //1deps url 및 title가져오기
                        Iterator<Page> child2depsPages = page2deps.listChildren();
                        while (child2depsPages.hasNext()) {
                            Page child2deps = child2depsPages.next();

                            Map<String, String> map2 = new HashMap<>();
                            map2.put("TitleTwoDeps", child2deps.getTitle());
                            map2.put("PathTwoDeps", child2deps.getPath());

                            oneDepsList.add(map2);
                            log.info("📁 child2deps Child111111 Page - Title: {}, Path: {}", child2deps.getTitle(), child2deps.getPath());
                        }
                    }

                }
                log.info("oneDepsList: {}", oneDepsList);
            } else {
                log.warn("⚠️ Page not found at /content/nsc/kr/ko");
            }


        }
    }


}
