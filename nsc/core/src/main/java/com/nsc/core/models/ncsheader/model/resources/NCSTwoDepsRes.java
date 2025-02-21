
package com.nsc.core.models.ncsheader.model.resources;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;

@Slf4j
@Model(adaptables = Resource.class)
public class NCSTwoDepsRes {


    @Getter @Setter
    @ValueMapValue(name = "twoDepsTitle") private String twoDepsTitle;

    @Getter @Setter
    @ValueMapValue(name = "twoDepsLink") private String twoDepsLink;

    @PostConstruct
    protected void init() {

       /* log.info(" KImteawoo  twoDepsTitle : " , twoDepsTitle );
        log.info(" KImteawoo  twoDepsLink : " , twoDepsLink );*/

    }


}
