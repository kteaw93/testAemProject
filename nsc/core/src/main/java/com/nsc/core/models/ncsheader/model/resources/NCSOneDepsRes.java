
package com.nsc.core.models.ncsheader.model.resources;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import java.util.List;

@Slf4j
@Model(adaptables = Resource.class)
public class NCSOneDepsRes {


    @Getter @Setter
    @ValueMapValue(name = "oneDepsTitle") private String oneDepsTitle;

    @Getter @Setter
    @ValueMapValue(name = "oneDepsLink") private String oneDepsLink;

    @Getter @Setter
    @ChildResource(name = "twoDapsItems") private List<NCSTwoDepsRes> twoDapsItems;

    @PostConstruct
    protected void init() {

       /* log.info("ss  twoDapsItems : " , twoDapsItems );*/
    }

}
