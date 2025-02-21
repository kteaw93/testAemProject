package com.nsc.core.models.ncsheader.model;


import com.nsc.core.models.ncsheader.model.resources.NCSOneDepsRes;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.log4j.Log4j;
import lombok.extern.slf4j.Slf4j;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import java.util.List;

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

    @PostConstruct
    protected void init() {

        log.info("KImteawoo  oneDapsItems : " , oneDapsItems );
    }


}
