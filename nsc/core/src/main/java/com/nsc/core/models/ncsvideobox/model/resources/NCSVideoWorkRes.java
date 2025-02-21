
package com.nsc.core.models.ncsvideobox.model.resources;

import lombok.Getter;
import lombok.Setter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;


@Model(adaptables = Resource.class)
public class NCSVideoWorkRes {


    @Getter @Setter
    @ValueMapValue(name = "workYear") private String workYear;

    @Getter @Setter
    @ValueMapValue(name = "workName") private String workName;

    @Getter @Setter
    @ValueMapValue(name = "workComponey") private String workComponey;

    @Getter @Setter
    @ValueMapValue(name = "workComment") private String workComment;

    @PostConstruct
    protected void init() {

    }

}
