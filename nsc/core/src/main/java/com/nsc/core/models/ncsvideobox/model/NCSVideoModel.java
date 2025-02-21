
package com.nsc.core.models.ncsvideobox.model;


import com.nsc.core.models.ncsvideobox.model.resources.NCSVideoMainRes;
import com.nsc.core.models.ncsvideobox.model.resources.NCSVideoWorkRes;
import lombok.Getter;
import lombok.Setter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

import javax.annotation.PostConstruct;
import java.util.List;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NCSVideoModel {

    @Getter @Setter
    @ChildResource(name = "mainItems") private List<NCSVideoMainRes> mainItems;

    @Getter @Setter
    @ChildResource(name = "worksItems") private List<NCSVideoWorkRes> worksItems;


    @PostConstruct
    protected void init() {

    }

}
