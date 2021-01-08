import { startOfHour } from 'date-fns';

import Appointment from '../models/appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/**
 * [x] Recebimento das informaçoes
 * [x] Tratativa de erros/excessões
 * [x] Acesso ao repositorio
 */
interface RequestDTO {
  provider: string;
  date: Date;
}
/**
 * Dependency Inversion (SOLID)
 */

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: RequestDTO): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSamedate = this.appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSamedate) {
      // O service não tem acesso ao resquest e response
      throw Error('This appointment is already booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });
    return appointment;
  }
}
export default CreateAppointmentService;
