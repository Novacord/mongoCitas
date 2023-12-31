import { Router } from "express";
import Citas from "../services/citas.js"
import { validate } from "../validations/validateService.js";
const router = Router()

router.get('/obtener', validate(Citas.getCita))

router.get('/obtener/user/:id', validate(Citas.getCitaUser))

router.get('/obtener/doctor/:id', validate(Citas.getCitaUserDoctor))

router.get('/obtener/consultorio/:id', validate(Citas.getCitaUserConsultorio))

router.get('/obtener/numeroCitasMedico/:id', validate(Citas.getCitasDoctorNumber))

export { router };