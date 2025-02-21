
package com.nsc.core.models.ncsvideobox.model.resources;

import lombok.Getter;
import lombok.Setter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;


@Model(adaptables = Resource.class)
public class NCSVideoMainRes {


    @Getter @Setter
    @ValueMapValue(name = "mainTitle") private String mainTitle;

    @PostConstruct
    protected void init() {

    }

}
