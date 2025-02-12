package com.nsc.core.models;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import java.util.Optional;

import static org.apache.sling.api.resource.ResourceResolver.PROPERTY_RESOURCE_TYPE;

public class TestModel {
    @ValueMapValue(name=PROPERTY_RESOURCE_TYPE, injectionStrategy= InjectionStrategy.OPTIONAL)
    @Default(values="No resourceType")
    protected String resourceType;

    @SlingObject
    private Resource currentResource;
    @SlingObject
    private ResourceResolver resourceResolver;

    private String message;

    @PostConstruct
    protected void init() {
        PageManager pageManager = resourceResolver.adaptTo(PageManager.class);
        String currentPagePath = Optional.ofNullable(pageManager)
                .map(pm -> pm.getContainingPage(currentResource))
                .map(Page::getPath).orElse("");

        message = "가나다라 asdasd 12314512?";
    }

    public String getMessage() {
        return message;
    }
}
