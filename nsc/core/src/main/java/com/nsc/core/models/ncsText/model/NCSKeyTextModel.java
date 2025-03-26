
package com.nsc.core.models.ncsText.model;


import com.nsc.core.models.ncskeypoint.model.resources.NCSKeyPointResModel;
import lombok.Getter;
import lombok.Setter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import javax.annotation.PostConstruct;
import java.util.List;

@Model(adaptables = Resource.class, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
public class NCSKeyTextModel {
    @Getter @Setter
    @ValueMapValue
    private String text;

    @Getter @Setter
    @ValueMapValue
    private String tag;


}
