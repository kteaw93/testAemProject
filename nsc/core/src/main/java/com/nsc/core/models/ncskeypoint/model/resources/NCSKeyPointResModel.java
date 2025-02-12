
package com.nsc.core.models.ncskeypoint.model.resources;

import lombok.Getter;
import lombok.Setter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import java.util.List;


@Model(adaptables = Resource.class)
public class NCSKeyPointResModel {


    @Getter @Setter
    @ValueMapValue(name = "desktopTitle") private String desktopTitle;

    @Getter @Setter
    @ValueMapValue(name = "description") private String description;

    @PostConstruct
    protected void init() {

    }

}
