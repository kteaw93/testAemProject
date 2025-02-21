package com.nsc.core.models.ncsfooter.model;


import com.nsc.core.models.ncsfooter.model.resources.NCSComponeyRes;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import java.util.List;

@Slf4j
@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NCSFooterModel {
    @Getter @Setter
    @ValueMapValue(name = "mainImageIcon") private String mainImageIcon;

    @Getter @Setter
    @ChildResource(name = "componeyInfo") private List<NCSComponeyRes> componeyInfo;


    @PostConstruct
    protected void init() {

       /* log.info("KImteawoo  mainImageIconmainImageIconmainImageIconmainImageIcon : " , mainImageIcon );*/
    }


}
