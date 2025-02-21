package com.nsc.core.models.ncsfooter.model.resources;

import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Slf4j
@Model(adaptables = Resource.class)
public class NCSComponeyRes {
    @Getter
    @Setter
    @ValueMapValue(name = "componeyMainLink") private String componeyMainLink;

    @Getter @Setter
    @ValueMapValue(name = "componeyMainTitle") private String componeyMainTitle;

}
